const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    
    // define and get students - LG
    const students = await getAllStudents(req.query);
    res.json(students);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    
    // define and add new student - LG
    const { id: reporterId } = req.user;
    const result = await addNewStudent({ ...req.body, reporterId });
    res.json(result);

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
   
    // define and update student - LG
    const { id: reporterId } = req.user;
    const result = await updateStudent({ ...req.body, reporterId });
    res.json(result);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    
    // define and get student detail - LG
    const { id } = req.params;
    const student = await getStudentDetail(id);
    res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    
    // define and set student status - LG
    const { id: reviewerId } = req.user;
    const { id: userId } = req.params;
    const { status } = req.body;
    const result = await setStudentStatus({ userId, reviewerId, status });
    res.json(result);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};

//remove all duplicate code causing errors and redeclares - LG