export async function fetchSearch() {
    const data = await fetch('http://localhost:8088/examhub/search_api/search.php');
    if (!data.ok) {
        console.log('error');
    }
    return data.json();
}
