const PDFDocument = require('pdfkit');
const fs = require('fs');



const createPDF = async options =>{
  // Create a document
  const doc = new PDFDocument({margin:0});

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream(__dirname+`/pdf/${options.rollNo}.pdf`));

  doc.image('temp.jpg',{fit:[doc.page.width,doc.page.height],align:'left'})

  // Embed a font, set the font size, and render some text


  // Add an image, constrain it to a given size, and center it vertically and horizontally
  doc.image(__dirname+'/public/'+options.id, 30, 200, { width: 150 });

  doc
    .font('Times-Roman')
    .fontSize(25)
    .text(`Name : ${options.name}`, 250, 200);

  doc.moveDown(1);

  doc
    .fontSize(25)
    .text(`Roll No : ${options.rollNo}`);

    doc.moveDown();

    doc
      .fontSize(25)
      .text(`E-mail : ${options.mailId}`);

    doc.moveDown();

    doc
      .fontSize(25)
      .text(`Batch : ${options.batch}`);

    doc.moveDown();


  doc.end();
return 0;
}

module.exports = createPDF;
