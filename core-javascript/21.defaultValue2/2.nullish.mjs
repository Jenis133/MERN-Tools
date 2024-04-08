let name = false ?? undefined ?? null ?? "" ?? 0
console.log(name);

// false values in case of (??) are (null, undefined) this means ("") is seen as a true value