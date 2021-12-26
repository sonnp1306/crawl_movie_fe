import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const MoviesList = ({ movies, currentPage, pageSize }) => {
    console.log( 'Render movielist component ...');
    return (
        <table className="table table-bordered">
            <thead class="table-info">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Thumb</th>
                    <th scope="col">Title</th>
                    <th scope="col">Year</th>
                    <th scope="col">Episode numb</th>
                    <th scope="col">Full series</th>
                    <th scope="col">Director name</th>
                    <th scope="col">Country</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, index) => (
                    <tr key={movie.title}>
                        <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
                        <td><img src={movie.thumnail_url} className="rounded mx-auto d-block" style={{ width: 50, height: 75 }} alt="..." /></td>
                        <td><a href={movie.movie_url} target="blank">{movie.title}</a></td>
                        <td className="column-center">{movie.year}</td>
                        <td className="column-center">{movie.number_of_episode}</td>
                        <td className="column-center">{movie.full_series ? 'Full' : 'False'}</td>
                        <td>{movie.director_name}</td>
                        <td>{movie.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default memo(MoviesList);