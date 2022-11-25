from fpdf import FPDF as fpdf

def main():
    """ main runner """

    pdf = fpdf(unit='in')
    pdf.add_page()
    
    # Sheet title
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(w=4, h=0.25, txt='Kids on Brooms', border=1, ln=0, align='L')

    # Trope Header
    pdf.set_font('Arial', 'B', 14)
    pdf.cell(w=0, h=0.25, txt='Trope', border=1, ln=1, align='L')

    # Subtitle
    pdf.set_font('Arial', 'B', 12)
    pdf.cell(w=4, h=0.25, txt='Harry Potter', border=1, ln=0, align='L')

    # Trope Field
    pdf.set_font('Arial', '', 14)
    pdf.cell(w=0, h=0.25, txt='Aloof Teacher', border=1, ln=1, align='L')
    
    # Output result
    pdf.output('output/charactersheet.pdf', 'F')

if __name__ == "__main__":
    main()