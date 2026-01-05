import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const generatePDFFromComponent = async (elementId = 'resume-container') => {
    try {
        // Find the resume container element
        const element = document.querySelector(`.${elementId}`) || document.querySelector(`#${elementId}`)

        if (!element) {
            console.error('Resume element not found')
            return
        }

        // Configure html2canvas options for better quality
        const canvas = await html2canvas(element, {
            scale: 2, // Higher resolution
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: element.scrollWidth,
            height: element.scrollHeight,
            scrollX: 0,
            scrollY: 0,
        })

        // Calculate PDF dimensions
        const imgWidth = 210 // A4 width in mm
        const pageHeight = 295 // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        let heightLeft = imgHeight

        // Create PDF
        const pdf = new jsPDF('p', 'mm', 'a4')
        let position = 0

        // Add first page
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight

        // Add additional pages if needed
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight
            pdf.addPage()
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight)
            heightLeft -= pageHeight
        }

        // Download the PDF
        pdf.save('Mehedi_Hasan_Emon_Resume.pdf')
    } catch (error) {
        console.error('Error generating PDF:', error)
        // Fallback to print dialog
        window.print()
    }
}

export const printResume = () => {
    window.print()
}