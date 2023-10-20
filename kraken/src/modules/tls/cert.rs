//! This modules defines how certs are created i.e. what parameters are set

use std::net::IpAddr;

use rcgen::{
    BasicConstraints, Certificate, CertificateParams, DnType, ExtendedKeyUsagePurpose, IsCa,
    KeyUsagePurpose, RcgenError, SanType, PKCS_ECDSA_P256_SHA256,
};
use url::{Host, Url};

/// [`CertificateBuilder`] which builds the kraken's main certificate
pub struct CA;
impl CertificateBuilder for CA {
    fn params(self, params: &mut CertificateParams) {
        params.alg = &PKCS_ECDSA_P256_SHA256;
        params
            .distinguished_name
            .push(DnType::CommonName, "kraken CA");
        params.is_ca = IsCa::Ca(BasicConstraints::Unconstrained);
        params.key_usages.push(KeyUsagePurpose::KeyCertSign);
    }
}

/// [`CertificateBuilder`] which builds a leech's server and client certificate
pub struct Leech {
    /// The uri used to connect to the leech via grpc
    pub url: Url,
}
impl CertificateBuilder for Leech {
    fn params(self, params: &mut CertificateParams) {
        params.alg = &PKCS_ECDSA_P256_SHA256;
        params
            .distinguished_name
            .push(DnType::CommonName, "leech cert");
        params.is_ca = IsCa::ExplicitNoCa;
        params.key_usages.extend([
            KeyUsagePurpose::DigitalSignature,
            KeyUsagePurpose::KeyEncipherment,
        ]);
        params
            .extended_key_usages
            .extend([ExtendedKeyUsagePurpose::ServerAuth]);
        if let Some(host) = self.url.host() {
            params.subject_alt_names.extend([match host {
                Host::Domain(domain) => SanType::DnsName(domain.to_string()),
                Host::Ipv4(v4) => SanType::IpAddress(IpAddr::V4(v4)),
                Host::Ipv6(v6) => SanType::IpAddress(IpAddr::V6(v6)),
            }]);
        }
        /*params
        .subject_alt_names
        .extend([SanType::URI(self.uri.to_string())]);*/
        params.use_authority_key_identifier_extension = true;
    }
}

/// Small trait to encapsulate building a [`Certificate`] from some parameters
///
/// Implementors:
/// - [`CA`] creates the kraken's main certificate
/// - [`Leech`] creates a leech's server and client certificate
pub trait CertificateBuilder: Sized {
    /// Modify an instance of [`CertificateParams::default`] to match the builder's intent.
    fn params(self, params: &mut CertificateParams);

    /// Consume the builder and create a [`Certificate`]
    fn build(self) -> Result<Certificate, RcgenError> {
        let mut params = CertificateParams::default();
        self.params(&mut params);
        Certificate::from_params(params)
    }
}
