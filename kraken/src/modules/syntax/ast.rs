use std::fmt::Debug;

/// AST for global filter
#[derive(Default, Debug)]
pub struct GlobalAST {
    /// Filter by tags
    pub tags: Option<Or<String>>,
}

/// AST for domain specific filter
#[derive(Default, Debug)]
pub struct DomainAST {
    /// Filter by tags
    pub tags: Option<Or<String>>,
}

/// AST for host specific filter
#[derive(Default, Debug)]
pub struct HostAST {
    /// Filter by tags
    pub tags: Option<Or<String>>,
}

/// AST for port specific filter
#[derive(Default, Debug)]
pub struct PortAST {
    /// Filter ports by tags
    pub tags: Option<Or<String>>,

    /// Filter ports by port numbers
    pub ports: Option<Or<MaybeRange<u16>>>,
}

/// AST for service specific filter
#[derive(Default, Debug)]
pub struct ServiceAST {
    /// Filter by tags
    pub tags: Option<Or<String>>,
}

/// OR expression
#[derive(Debug, Clone)]
pub struct Or<T>(
    /// List of expressions to be `or`ed
    pub Vec<And<T>>,
);

/// AND expression
#[derive(Debug, Clone)]
pub struct And<T>(
    /// List of expressions to be `and`ed
    pub Vec<Not<T>>,
);

/// Potentially negated expression
#[derive(Debug, Clone)]
pub struct Not<T> {
    /// Should the value be negated
    pub is_negated: bool,

    /// The leaf's value
    pub value: T,
}

/// Range of values or a single one
#[derive(Debug, Clone)]
pub enum MaybeRange<T> {
    /// Range of values
    Range(Range<T>),
    /// Single value
    Single(T),
}

/// A range of values
#[derive(Debug, Clone)]
pub struct Range<T> {
    /// Start of the range
    pub start: Option<T>,
    /// End of the range
    pub end: Option<T>,
}
