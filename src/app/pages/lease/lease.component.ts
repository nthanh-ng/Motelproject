import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-lease',
  templateUrl: './lease.component.html',
  styleUrls: ['./lease.component.css'],
})
export class LeaseComponent implements OnInit {
  
  // thêm ảnh nhà trọ
    files: File[] = [];
  
    constructor(private http: HttpClient) { }
  
    onSelect(event) {
        console.log(event);
        this.files.push(...event.addedFiles);
  
        const formData = new FormData();
    
        for (var i = 0; i < this.files.length; i++) { 
          formData.append("file[]", this.files[i]);
        }
   
        this.http.post('http://localhost:8001/upload.php', formData)
        .subscribe(res => {
           console.log(res);
           alert('Uploaded Successfully.');
        })
    }
  
    onSubmit(data) { 
      console.log(data);
  }
  
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }

  ngOnInit() {
    this.title = JSON.parse(localStorage.getItem('token'))
  }

  title: number
  add() {
    this.title = 1000
    localStorage.setItem('token', JSON.stringify(this.title))
  }
  Remove() {
    localStorage.removeItem('token')
  }
}
