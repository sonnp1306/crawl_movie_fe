import { useState, useEffect, useRef, useCallback } from "react";
// // import { saveAs } from 'file-saver';
import MoviesList from "./MoviesList";
import Pagination from './Pagination';

import movieApi from '../api/movieApi'

const GetDataByUrl = () => {

    const emptyMovie = useRef([]);
    const [movies, setMovies] = useState(emptyMovie.current);
    const [moviesPerPage] = useState(20);   
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [categoryUrl, setCategoryUrl] = useState('');
    

    const handleGetDataByUrl = () => {
        fetchMovies(categoryUrl, currentPage, moviesPerPage);
    };

    useEffect( () => {
        fetchMovies(categoryUrl,currentPage,moviesPerPage);
    },[currentPage]);
    
    const fetchMovies = async (url, pageIndex, pageSize) => {
        if (categoryUrl === '') {
            setMovies(emptyMovie.current);
            return;
        }
        //try catch reponse
        console.log('Call api to get data ...')
        setLoading(true)

        try {
            const response = await movieApi.getDataByUrl({
                "page_index": pageIndex,
                "page_size": pageSize,
                "url": url.endsWith('/') ? url : url + '/'
            })
            setMovies(response.data);
        }catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    const handleChangePageNumber = useCallback(pageNumber => setCurrentPage(pageNumber), [])

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="https://ephimmoi.net/category/the-loai-phim"
                        value={categoryUrl}
                        onChange={event => setCategoryUrl(event.target.value.trim())}
                    />
                    <div className="btn-group me-2" role="group">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={handleGetDataByUrl}> 
                            Get data
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            // onClick={handleExport}>
                                >
                            Export data
                        </button>
                    </div>
                </div>
            </div>

            <div className='container mt-1'>
                {movies.length > 0 &&
                    <Pagination
                        moviesPerPage={moviesPerPage}
                        totalMovies={200}
                        handleChangePageNumber={handleChangePageNumber}
                    />
                }
                {loading &&
                    <div className="alert alert-info">Loading...</div>
                }
                {!loading && <MoviesList movies={movies} currentPage={currentPage} pageSize={moviesPerPage} />}
            </div>
        </div>
    )
}

export default GetDataByUrl;