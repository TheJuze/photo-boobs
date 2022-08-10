export const getImageUrl = (imagePath: string | null | undefined) => (imagePath ? `${process.env.REACT_APP_BASE_BACKEND_URL}${imagePath}` : "");
