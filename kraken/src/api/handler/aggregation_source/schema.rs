use std::net::IpAddr;

use chrono::DateTime;
use chrono::Utc;
use serde::Deserialize;
use serde::Serialize;
use utoipa::ToSchema;
use uuid::Uuid;

use crate::api::handler::attack_results::schema::FullDnsTxtScanResult;
use crate::api::handler::attack_results::schema::FullOsDetectionResult;
use crate::api::handler::attack_results::schema::FullQueryCertificateTransparencyResult;
use crate::api::handler::attack_results::schema::FullServiceDetectionResult;
use crate::api::handler::attack_results::schema::FullTestSSLResult;
use crate::api::handler::attack_results::schema::FullUdpServiceDetectionResult;
use crate::api::handler::attack_results::schema::SimpleBruteforceSubdomainsResult;
use crate::api::handler::attack_results::schema::SimpleDnsResolutionResult;
use crate::api::handler::attack_results::schema::SimpleHostAliveResult;
use crate::api::handler::attack_results::schema::SimpleQueryUnhashedResult;
use crate::api::handler::hosts::schema::ManualHostCertainty;
use crate::api::handler::hosts::schema::OsType;
use crate::api::handler::ports::schema::ManualPortCertainty;
use crate::api::handler::ports::schema::PortProtocol;
use crate::api::handler::services::schema::ManualServiceCertainty;
use crate::api::handler::users::schema::SimpleUser;

/// Numbers how many attacks of a certain kind found an aggregated model
#[derive(Copy, Clone, Serialize, Deserialize, ToSchema, Debug, Default)]
pub struct SimpleAggregationSource {
    /// Bruteforce subdomains via DNS requests
    pub bruteforce_subdomains: usize,
    /// Query certificate transparency
    pub query_certificate_transparency: usize,
    /// Query the dehashed API
    pub query_dehashed: usize,
    /// Check if a host is reachable via icmp
    pub host_alive: usize,
    /// Detect the service that is running on a port
    pub service_detection: usize,
    /// Detect UDP services on a host on given ports
    pub udp_service_detection: usize,
    /// Resolve domain names
    pub dns_resolution: usize,
    /// DNS TXT scans
    pub dns_txt_scan: usize,
    /// Perform forced browsing
    pub forced_browsing: usize,
    /// Detect the OS of the target
    pub os_detection: usize,
    /// Detect if anti-port scanning techniques are in place
    pub anti_port_scanning_detection: usize,
    /// Scan udp ports
    pub udp_port_scan: usize,
    /// Perform version detection
    pub version_detection: usize,
    /// Ran `testssl.sh`
    pub test_ssl: usize,
    /// Manually inserted
    pub manual: bool,
}

/// All data sources which contributed to an aggregated model
#[derive(Serialize, Deserialize, ToSchema, Debug, Clone)]
pub struct FullAggregationSource {
    /// All attack which contributed to an aggregated model
    pub attacks: Vec<SourceAttack>,

    /// All manual inserts which contributed to an aggregated model
    pub manual_insert: Vec<ManualInsert>,
}
/// Copy of [`SimpleAttack`](crate::api::handler::attacks::SimpleAttack) with an added `results` field
#[derive(Serialize, Deserialize, ToSchema, Debug, Clone)]
pub struct SourceAttack {
    /// The identifier of the attack
    pub uuid: Uuid,
    /// The workspace this attack is attached to
    pub workspace_uuid: Uuid,
    /// The user that has started the attack
    pub started_by: SimpleUser,
    /// If this is None, the attack is still running
    pub finished_at: Option<DateTime<Utc>>,
    /// If this field is set, the attack has finished with an error
    pub error: Option<String>,
    /// The point in time this attack was started
    pub created_at: DateTime<Utc>,
    /// Flattened enum storing the `attack_type` next to the `results`
    #[serde(flatten)]
    pub results: SourceAttackResult,
}

/// The different types of attack and their results
#[derive(Serialize, Deserialize, ToSchema, Debug, Clone)]
#[serde(tag = "attack_type", content = "results")]
pub enum SourceAttackResult {
    /// The [`AttackType::BruteforceSubdomains`] and its results
    BruteforceSubdomains(Vec<SimpleBruteforceSubdomainsResult>),
    /// The [`AttackType::QueryCertificateTransparency`] and its results
    QueryCertificateTransparency(Vec<FullQueryCertificateTransparencyResult>),
    /// The [`AttackType::QueryUnhashed`] and its results
    QueryDehashed(Vec<SimpleQueryUnhashedResult>),
    /// The [`AttackType::HostAlive`] and its results
    HostAlive(Vec<SimpleHostAliveResult>),
    /// The [`AttackType::ServiceDetection`] and its results
    ServiceDetection(Vec<FullServiceDetectionResult>),
    /// The [`AttackType::UdpServiceDetection`] and its results
    UdpServiceDetection(Vec<FullUdpServiceDetectionResult>),
    /// The [`AttackType::DnsResolution`] and its results
    DnsResolution(Vec<SimpleDnsResolutionResult>),
    /// The [`AttackType::DnsTxtScan`] and its results
    DnsTxtScan(Vec<FullDnsTxtScanResult>),
    /// The [`AttackType::OSDetection`] and its results
    OsDetection(Vec<FullOsDetectionResult>),
    /// The [`AttackType::TestSSL`] and its results
    TestSSL(Vec<FullTestSSLResult>),
}

/// The different types of manual inserts
#[derive(Serialize, Deserialize, ToSchema, Debug, Clone)]
#[serde(tag = "type")]
pub enum ManualInsert {
    /// A manually inserted domain
    Domain {
        /// The inserted domain
        domain: String,
        /// The user which inserted the domain
        user: SimpleUser,
        /// The workspace the domain was inserted to
        workspace: Uuid,
        /// The point in time, the domain was inserted
        created_at: DateTime<Utc>,
    },
    /// A manually inserted host
    Host {
        /// The host's ip address
        #[schema(value_type = String, example = "172.0.0.1")]
        ip_addr: IpAddr,
        /// The host's os type
        os_type: OsType,
        /// The inserted data's certainty
        certainty: ManualHostCertainty,
        /// The user which inserted the host
        user: SimpleUser,
        /// The workspace the host was inserted to
        workspace: Uuid,
        /// The point in time, the host was inserted
        created_at: DateTime<Utc>,
    },
    /// A manually inserted port
    Port {
        /// The inserted port
        port: u16,
        /// The port's protocol
        protocol: PortProtocol,
        /// The inserted data's certainty
        certainty: ManualPortCertainty,
        /// The host's ip address
        #[schema(example = "172.0.0.1")]
        host: String,
        /// The user which inserted the port
        user: SimpleUser,
        /// The workspace the port was inserted to
        workspace: Uuid,
        /// The point in time, the port was inserted
        created_at: DateTime<Utc>,
    },
    /// A manually inserted service
    Service {
        /// The inserted service
        name: String,
        /// The service's version
        version: Option<String>,
        /// The inserted data's certainty
        certainty: ManualServiceCertainty,
        /// The service's port
        port: Option<u16>,
        /// The host's ip address
        #[schema(example = "172.0.0.1")]
        host: String,
        /// The user which inserted the service
        user: SimpleUser,
        /// The workspace the service was inserted to
        workspace: Uuid,
        /// The point in time, the service was inserted
        created_at: DateTime<Utc>,
    },
    /// A manually inserted http service
    HttpService {
        /// The service's name
        name: String,
        /// The service's domain
        domain: Option<String>,
        /// The service's ip address
        #[schema(value_type = String)]
        ip_addr: IpAddr,
        /// The service's port
        port: u16,
        /// The base path the service is routed on
        base_path: String,
        /// Is this a https service?
        tls: bool,
        /// Does this service require sni?
        sni_require: bool,
        /// The user which inserted the http service
        user: SimpleUser,
        /// The workspace the http service was inserted to
        workspace: Uuid,
        /// The point in time, the http service was inserted
        created_at: DateTime<Utc>,
    },
}
