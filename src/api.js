export async function getLofiTracks() {
  const res = await fetch("https://lofi-api.azurewebsites.net/music");
  return await res.json();
}

