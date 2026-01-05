import React, { useEffect } from 'react'
import Resume from '../components/Resume'
import { generatePDFFromComponent } from '../utils/pdfGenerator'

const ResumePage = () => {
  useEffect(() => {
    // Add print button if opened from portfolio
    if (window.opener) {
      const printBtn = document.createElement('div')
      printBtn.className = 'print-button'
      printBtn.innerHTML = `
        <button 
          id="pdf-download-btn"
          style="
            position: fixed; 
            top: 20px; 
            right: 20px; 
            z-index: 1000; 
            background: linear-gradient(135deg, #4f46e5, #7c3aed); 
            color: white; 
            padding: 12px 24px; 
            border-radius: 12px; 
            border: none;
            cursor: pointer; 
            box-shadow: 0 8px 32px rgba(79, 70, 229, 0.3); 
            font-family: 'Segoe UI', sans-serif; 
            font-size: 14px; 
            font-weight: 600; 
            display: flex; 
            align-items: center; 
            gap: 8px; 
            transition: transform 0.2s ease;
          "
          onmouseover="this.style.transform='translateY(-2px)'" 
          onmouseout="this.style.transform='translateY(0)'"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Save as PDF
        </button>
      `
      
      // Add print-specific styles
      const printStyles = document.createElement('style')
      printStyles.textContent = `
        @media print {
          .print-button {
            display: none !important;
          }
          
          body {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `
      
      document.head.appendChild(printStyles)
      document.body.appendChild(printBtn)
      
      // Add click handler for PDF generation
      const pdfBtn = document.getElementById('pdf-download-btn')
      if (pdfBtn) {
        pdfBtn.addEventListener('click', () => {
          generatePDFFromComponent('resume-container')
        })
      }
      
      // Cleanup on unmount
      return () => {
        if (document.body.contains(printBtn)) {
          document.body.removeChild(printBtn)
        }
        if (document.head.contains(printStyles)) {
          document.head.removeChild(printStyles)
        }
      }
    }
  }, [])

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      padding: '20px' 
    }}>
      <Resume />
    </div>
  )
}

export default ResumePage