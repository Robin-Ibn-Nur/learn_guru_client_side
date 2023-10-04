import { useParams } from "react-router-dom";
import useClassPage from "../../../CustomHooks/useClassPage";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';

const CourseDetails = () => {
    const { classPage } = useClassPage();
    const [singleData, setSingleData] = useState(null); // Initialize to null
    const { id } = useParams();

    useEffect(() => {
        const exist = classPage.find((course) => course._id === id);

        if (exist) {
            setSingleData(exist);
        }
    }, [id, classPage]);

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 0,
        },
    };

    // console.log(singleData?.classVideo.split("be/")[1]);
    return (
        <div>
            {singleData ? (
                <div className="max-w-xl mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4">{singleData.className}</h1>
                    <p className="text-gray-600">{singleData?.syllabus}</p>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">Instructor: {singleData?.instructorName}</h2>
                        <p className="text-gray-600">{singleData?.instructor?.bio}</p>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">Reviews:</h2>
                        {/* <ul>
                            {singleData.reviews.map((review) => (
                                <li key={review.id} className="mb-2">
                                    <p className="text-yellow-600">Rating: {review.rating}</p>
                                    <p className="text-gray-600">{review.comment}</p>
                                </li>
                            ))}
                        </ul> */}
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">Course Video:</h2>
                        <div className="aspect-w-16 aspect-h-9">
                            {/* <YouTube videoId={singleData.classVideo} opts={opts}  /> */}
                            <YouTube videoId={singleData?.classVideo.split("be/")[1]} opts={opts} />
                        </div>
                    </div>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CourseDetails;
