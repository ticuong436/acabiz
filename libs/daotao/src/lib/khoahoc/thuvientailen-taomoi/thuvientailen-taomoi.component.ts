import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from 'ngx-file-drop';

@Component({
  selector: 'myorg-thuvientailen-taomoi',
  templateUrl: './thuvientailen-taomoi.component.html',
  styleUrls: ['./thuvientailen-taomoi.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThuvientailenTaomoiComponent implements OnInit {
  selectedFiles!: any;
  constructor() {}
  selectFile(event: any): void {
    console.log(event);
    
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }
  // public files: NgxFileDropEntry[] = [];

  // public dropped(files: NgxFileDropEntry[]) {
  //   this.files = files;
  //   for (const droppedFile of files) {
  //     // Is it a file?
  //     if (droppedFile.fileEntry.isFile) {
  //       const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
  //       fileEntry.file((file: File) => {
  //         // Here you can access the real file
  //         console.log(droppedFile.relativePath, file);

  //         /**
  //       // You could upload it like this:
  //       const formData = new FormData()
  //       formData.append('logo', file, relativePath)

  //       // Headers
  //       const headers = new HttpHeaders({
  //         'security-token': 'mytoken'
  //       })

  //       this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
  //       .subscribe(data => {
  //         // Sanitized logo returned from backend
  //       })
  //       **/
  //       });
  //     } else {
  //       // It was a directory (empty directories are added, otherwise only files)
  //       const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
  //       console.log(droppedFile.relativePath, fileEntry);
  //     }
  //   }
  // }

  // public fileOver(event:any) {
  //   this.selectedFiles = event.target.files;
  //   console.log(this.selectedFiles);
  // }

  // public fileLeave(event:any) {
  //   this.selectedFiles = event.target.files;
  //   console.log(this.selectedFiles);
  // }
  ngOnInit(): void {}
}
