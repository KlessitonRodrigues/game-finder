export const searchVideos = async (query: string) => {
  const corsProxy = 'https://corsproxy.io/?';
  const url = 'https://www.youtube.com/youtubei/v1/search';
  const proxyUrl = corsProxy + encodeURIComponent(url);

  const body = {
    context: {
      client: {
        hl: 'en',
        gl: 'BR',
        clientName: 'WEB',
        clientVersion: '2.20240111.09.00',
        timeZone: 'America/Fortaleza',
      },
    },
    query,
  };

  const res = await fetch(proxyUrl, {
    headers: {
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
    method: 'POST',
    mode: 'cors',
  });

  const data = await res.json();
  const results = data['contents']['twoColumnSearchResultsRenderer'];
  const content = results['primaryContents']['sectionListRenderer']['contents'];
  const items = content[0]['itemSectionRenderer']['contents'];
  const itemsMap = items.map((item: any) => item?.videoRenderer?.videoId);
  const ids = itemsMap.filter((item: any) => !!item) as string[];
  const urls = ids.map(id => `https://www.youtube.com/embed/${id}?fs=0`);
  return urls;
};
