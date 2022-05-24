function urlify (blogTitle) {
    const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
    const blogTitlePunctuation = blogTitle.replace(punctuation, "");
    return blogTitlePunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming!!!"));
console.log(urlify("I've got a new job :)"));
