import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1";

class studentService {

    getStudent(){
        return axios.get(`${STUDENT_API_BASE_URL}/student`);
    }

    createStudent(student){
        return axios.post(`${STUDENT_API_BASE_URL}/student`, student);
    }

    getStudentById(studentID){
        return axios.get(`${STUDENT_API_BASE_URL}/student` + '/' + studentID);
    }

    updateStudent(student, studentId){
        return axios.put(`${STUDENT_API_BASE_URL}/student` + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(`${STUDENT_API_BASE_URL}/student` + '/' + studentId);
    }
}

export default new studentService()