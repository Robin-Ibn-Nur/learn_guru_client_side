import { useState } from "react";
import useClassPage from "../../../CustomHooks/useClassPage";
import { Link } from "react-router-dom";



const TopSlider = () => {
    const { classPage } = useClassPage()
    console.log(classPage);


    const [filterCategory, setFilterCategory] = useState('');
    const [filterInstructor, setFilterInstructor] = useState('');
    const [minRating, setMinRating] = useState(0);

    const filteredCourses = classPage.filter((course) => {
        return (
            course.className.toLowerCase().includes(filterCategory.toLowerCase()) &&
            course.instructorName.toLowerCase().includes(filterInstructor.toLowerCase()) &&
            course.rating >= minRating
        );
    });



    return (
        <div className="bg-gray-400 w-100 p-4">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold mb-4">Course List</h1>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Filter by Category:</label>
                    <input
                        type="text"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="border rounded-md p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Filter by Instructor:</label>
                    <input
                        type="text"
                        value={filterInstructor}
                        onChange={(e) => setFilterInstructor(e.target.value)}
                        className="border rounded-md p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Minimum Rating:</label>
                    <input
                        type="number"
                        value={minRating}
                        onChange={(e) => setMinRating(parseFloat(e.target.value))}
                        className="border rounded-md p-2 w-full"
                    />
                </div>
            </div>
            <ul className="container mx-auto">
                {filteredCourses.map((course) => (
                    <li key={course._id} className="mb-4">
                        <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center gap-5  w-100">
                            <h2 className="text-xl font-semibold">
                                {course.className}</h2>
                            <p className="text-gray-600 text-sm font-bold">
                                Instructor: {course.instructorName} | Ratings: {course.rating}
                            </p>
                            <Link className="btn btn-outline w-[150px]"
                                to={`/courseDetails/${course._id}`}>See Details</Link>
                            {/* <button onClick={() => handleClick(course._id)}>Course</button> */}
                        </div>

                    </li>

                ))}
            </ul>
        </div>
    );
};

export default TopSlider;