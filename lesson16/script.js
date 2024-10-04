$(document).ready(function() {
    let students = [
        { studentId: "SV001", studentName: "Nguyễn Văn An", age: 21, sex: true, birthDate: "2003-09-28", birthPlace: "HP", address: "Thủy Nguyên-Hải Phòng" },
        { studentId: "SV005", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
    { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "BN", address: "1, Ngô Quyền" },
    { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
    { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
    ];
    let editingIndex = -1;

    // Hiển thị danh sách sinh viên
    function renderStudents() {
        const tableBody = $('#studentTable');
        tableBody.empty(); 
        students.forEach((student, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.studentId}</td>
                    <td>${student.studentName}</td>
                    <td>${student.age}</td>
                    <td>${student.sex ? 'Nam' : 'Nữ'}</td>
                    <td class="action-buttons">
                        <button class="btn btn-danger btn-sm" onclick="viewStudent(${index})">Xem</button>
                        <button class="btn btn-warning btn-sm" onclick="editStudent(${index})">Sửa</button>
                        <button class="btn btn-info btn-sm" onclick="deleteStudent(${index})">Xóa</button>
                    </td>
                </tr>
            `;
            tableBody.append(row);
        });
    }

    // Thêm/Sửa sinh viên
    $('#saveButton').click(function() {
        const studentId = $('#studentId').val();
        const studentName = $('#studentName').val();
        const age = $('#age').val();
        const sex = $('#sex').val();
        const birthDate = $('#birthDate').val();
        const birthPlace = $('#birthPlace').val();
        const address = $('#address').val();

        if (editingIndex >= 0) {
            // Sửa thông tin sinh viên
            students[editingIndex] = { studentId, studentName, age, sex, birthDate, birthPlace, address };
            editingIndex = -1; 
        } else {
            // Thêm sinh viên mới
            students.push({ studentId, studentName, age, sex, birthDate, birthPlace, address });
        }

        renderStudents(); 
        $('#studentForm')[0].reset();
    });

    // Xem sinh viên
    window.viewStudent = function(index) {
        const student = students[index];
        alert(`Thông tin sinh viên:\nMã: ${student.studentId}\nTên: ${student.studentName}\nTuổi: ${student.age}`);
    };

    // Sửa sinh viên
    window.editStudent = function(index) {
        document.getElementById("fromShow").style.display="block";
        const student = students[index];
        $('#studentId').val(student.studentId);
        $('#studentName').val(student.studentName);
        $('#age').val(student.age);
        $('#sex').val(student.sex);
        $('#birthDate').val(student.birthDate);
        $('#birthPlace').val(student.birthPlace);
        $('#address').val(student.address);

        editingIndex = index; 
    };

    window.deleteStudent = function(index) {
        students.splice(index, 1); 
        renderStudents(); 
    };

    $('#searchButton').click(function() {
        const searchTerm = $('#searchInput').val().toLowerCase();
        const filteredStudents = students.filter(student => student.studentName.toLowerCase().includes(searchTerm));
        renderFilteredStudents(filteredStudents);
    });

    function renderFilteredStudents(filteredStudents) {
        const tableBody = $('#studentTable');
        tableBody.empty();
        filteredStudents.forEach((student, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.studentId}</td>
                    <td>${student.studentName}</td>
                    <td>${student.age}</td>
                    <td>${student.sex}</td>
                    <td class="action-buttons">
                        <button class="btn btn-danger btn-sm" onclick="viewStudent(${index})">Xem</button>
                        <button class="btn btn-warning btn-sm" onclick="editStudent(${index})">Sửa</button>
                        <button class="btn btn-info btn-sm" onclick="deleteStudent(${index})">Xóa</button>
                    </td>
                </tr>
            `;
            tableBody.append(row);
        });
    }

    // Sắp xếp sinh viên theo tên
    $('#sortButton').click(function() {
        students.sort((a, b) => a.studentName.localeCompare(b.studentName));
        renderStudents();
    });

    renderStudents();
});
function functionThemSV(){
    if(document.getElementById("fromShow").style.display=="block"){
        document.getElementById("fromShow").style.display="none";
    }else{
         document.getElementById("fromShow").style.display="block";
    }
   
}