import usePopulerClasses from "../../../CustomHooks/usePopulerClasses";


const PopulerClasses = () => {
    const [populerClasses] = usePopulerClasses()
    const topClasses = [...populerClasses].sort((a, b) => b.student - a.student);

    return (
        <div className="my-5">

            <h1 className="text-2xl w-50 border bg-gradient-to-r from-purple-500 to-blue-500 py-12  rounded text-yellow-400 font-serif text-center font-bold my-5">
                ....Populer Classes....
            </h1>
            <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                {topClasses.map((classItem) => (
                    <div key={classItem._id} className=" bg-white rounded shadow">
                        <img
                            src={classItem.classImage}
                            alt={classItem.className}
                            className="w-full h-[200px] object-cover rounded"
                        />
                        <h3 className="mt-4 text-xl font-semibold">{classItem.className}</h3>
                        <p className="mt-2">{classItem.student} students</p>
                    </div>
                ))}
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {topClasses.map((course) => (
                    <div key={course.id} className="border p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold">{course.title}</h2>
                        <p className="text-gray-600">Instructor: {course.instructor}</p>
                        <p className="text-gray-600">Rating: {course.rating}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default PopulerClasses;