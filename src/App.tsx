import { useState, useEffect } from "react";
import { fetchUnsplashWithTopic } from "./articles-api";
import { UnsplashImage } from "./types";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

export default function App() {
  const [imageData, setImageData] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchTopic, setSearchTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );

  const handleImageClick = (image: UnsplashImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    async function fetchUnsplash() {
      if (!searchTopic) return;

      try {
        setLoading(true);
        setError(false);
        const data = await fetchUnsplashWithTopic(searchTopic, page);
        if (data?.length > 0) {
          setImageData((prev) => [...prev, ...data]);
        } else {
          if (page === 1) setImageData([]);
          setHasMore(false);
        }
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchUnsplash();
  }, [searchTopic, page]);

  const handleSearchSubmit = (topic: string) => {
    setSearchTopic(topic);
    setImageData([]);
    setPage(1);
    setHasMore(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster position="top-right" reverseOrder={false} />
      {loading && <ClipLoader size={35} />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {imageData.length > 0 && (
        <ImageGallery items={imageData} onImageClick={handleImageClick} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage}
        onRequestClose={closeModal}
      />
      {imageData.length > 0 && hasMore && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}
