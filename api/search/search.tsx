export async function fetchSearch() {
    const data = fetch('http://localhost:8088/examhub/search_api/search.php')
        .then((response) => response.json())
        .then((json) => json);
    return data;
}
