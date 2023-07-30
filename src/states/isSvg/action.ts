export function asyncCheckIfImageContainSvg(avatar: string) {
  return new Promise<boolean>((resolve, reject) => {
    fetch(avatar)
      .then(response => {
        const contentType = response.headers.get('content-type');
        const isSvg = contentType && contentType.includes('image/svg+xml');
        resolve(!!isSvg); // Convert isSvg to a boolean value
      })
      .catch(error => {
        console.error('Error fetching the URL:', error);
        reject(error);
      });
  });
}
