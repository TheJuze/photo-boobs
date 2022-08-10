export const getImageUrl = (imagePath: string | null) => (imagePath ? `${process.env.REACT_APP_BASE_BACKEND_URL}${imagePath}` : "");
