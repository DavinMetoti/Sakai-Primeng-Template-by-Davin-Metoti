import { Component } from '@angular/core';
import * as pdf from '@mescius/wijmo.pdf';
import '@mescius/wijmo.pdf.security';

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrl: './generate-pdf.component.scss'
})
export class GeneratePdfComponent {

  PdfVersionEnum = pdf.PdfVersion;
  PdfPrintPermissionEnum = pdf.PdfPrintPermission;

  opts: pdf.IPdfDocumentOptions = {
    userPassword: '', // Set user password here
    ownerPassword: '', // Set owner password here
    version: pdf.PdfVersion.v1_7, // Choose PDF version
    permissions: {
      annotating: false,
      contentAccessibility: false,
      copying: false,
      documentAssembly: false,
      fillingForms: false,
      modifying: false,
      printing: pdf.PdfPrintPermission.NotAllowed
    }
  };

  optionItems = [
    { label: '1.3', value: 'v1_3' },
    { label: '1.4', value: 'v1_4' },
    { label: '1.5', value: 'v1_5' },
    { label: '1.6', value: 'v1_6' },
    { label: '1.7', value: 'v1_7' },
    { label: '1.7 ExtensionLevel 3', value: 'v1_7Ext3' }
  ];

  pdfFile: File | null = null;

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const pdfFile: File = fileList[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const base64String: string = reader.result.split(',')[1];
          console.log(base64String);
        }
      };
      reader.readAsDataURL(pdfFile);
    }
  }


  drawPdf() {
    this.opts.ended = (sender: pdf.PdfDocument, args: pdf.PdfDocumentEndedEventArgs) => pdf.saveBlob(args.blob, this.pdfFile.name);

    let doc = new pdf.PdfDocument(this.opts);

    doc.drawText('Demo page.')

    doc.end();
  }


}
