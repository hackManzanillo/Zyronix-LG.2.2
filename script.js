document.addEventListener("DOMContentLoaded", () => {
  const btnReporte1 = document.getElementById('btnReporte1');
  const reportContainer = document.getElementById('reportContainer');

  btnReporte1.addEventListener('click', () => {
    fetch('PAGOS.xlsx')
      .then(res => res.arrayBuffer())
      .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const html = XLSX.utils.sheet_to_html(worksheet);
        reportContainer.innerHTML = html;
      })
      .catch(err => {
        reportContainer.innerHTML = `<p style="color:red">Error al cargar el reporte: ${err.message}</p>`;
      });
  });
});
