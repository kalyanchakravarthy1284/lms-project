function createCourse() {
    const courseTitle = document.getElementById('courseTitle').value.trim();
    const courseDescription = document.getElementById('courseDescription').value.trim();
    const courseVideo = document.getElementById('courseVideo').files[0]; // Get uploaded video file
    const courseMaterials = Array.from(document.getElementById('courseMaterials').files); // Get uploaded materials files

    // Validate if required fields are filled before creating the course
    if (!courseTitle || !courseDescription || !courseVideo || courseMaterials.length === 0) {
        alert('Please fill in all fields and upload video/materials.');
        return;
    }

    // Create an object with the course details
    const courseDetails = {
        title: courseTitle,
        description: courseDescription,
        video: courseVideo,
        materials: courseMaterials,
        // Add more properties for other course details if needed
    };

    // Retrieve existing courses or initialize an empty array
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];

    // Add the newly created course to the list
    storedCourses.push(courseDetails);

    // Update the stored courses in localStorage
    localStorage.setItem('courses', JSON.stringify(storedCourses));

    // Redirect to the courses page after creating the course
    window.location.href = 'courses.html';
}
