import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'after2204';
  editingStudentId: string;
  editingStudentForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });
  constructor(private httpService: HttpServiceService){}

  students: any[] = [
    {
      name: 'Alejandro',
      lastName: 'Nigrelli',
      id: 1
    },
    {
      name: 'Fernando',
      lastName: 'Salguero',
      id: 999
    },
    {
      name: 'Pedro',
      lastName: 'Padilla',
      id: 1000
    }
  ];

  /**
   * Eliminar un estudiante de la lista de estudiantes
   * @param studentId el id del estudiante
   */
  onDeleteStudent(studentId: string){
    // Borrar student con el id studentId
    console.log(studentId );

    const filtredStudents = this.students.filter( (student) => {
      return student.id !== studentId;
    });


    this.students = filtredStudents;
  }

  onEditStudent(studentId: string){
    // console.log(studentId);
    this.editingStudentId = studentId;
    const student = this.onGetStudentById(studentId);

    this.editingStudentForm.get('firstName').setValue(student.name);
    this.editingStudentForm.get('lastName').setValue(student.lastName);

    console.log('El formulario tiene estos datos: ', this.editingStudentForm.value);

  }

  onUpdateStudent(studentId: string){
    const student = this.editingStudentForm.value;

    this.httpService.put('https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/users', student, studentId).subscribe(
      (successResponse: any) => {
        alert('Se actulizó');
        console.log(successResponse);
      },
      (errorResponse: any) => {
        alert('No se actualizó :C');
        console.error(errorResponse);
      }
    );
  }

  /**
   * obtener un estudiante basado en su id
   * @param studentId el id del estudiante
   * @returns el modelo de un estudiante
   */
  onGetStudentById(studentId: string){
    const student = this.students.filter( (student) => {
      return student.id === studentId;
    })[0];

    return student;
  }



}
