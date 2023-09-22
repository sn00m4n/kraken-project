/*
 * kraken
 *
 * The core component of kraken-project
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: git@omikron.dev
 * Generated by: https://openapi-generator.tech
 */


/// 
#[derive(Clone, Copy, Debug, Eq, PartialEq, Ord, PartialOrd, Hash, Serialize, Deserialize)]
pub enum GrantType {
    #[serde(rename = "authorization_code")]
    AuthorizationCode,

}

impl ToString for GrantType {
    fn to_string(&self) -> String {
        match self {
            Self::AuthorizationCode => String::from("authorization_code"),
        }
    }
}

impl Default for GrantType {
    fn default() -> GrantType {
        Self::AuthorizationCode
    }
}



