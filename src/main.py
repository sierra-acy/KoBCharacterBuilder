from fpdf import FPDF as fpdf
from character import Character

def main():
    """ main runner """

    dummyChar = Character()
    build_pdf(dummyChar)


def build_pdf(character:Character):
    margin = 1
    line_height = 0.75

    page_width = 21 - margin * 2
    page_height = 29.7 - margin * 2

    h1 = 24
    h2 = 18
    p = 14
    padding = '  '

    pdf = fpdf(unit='cm')
    pdf.add_page()

    ### SETUP FRAMES ###
    # Details Frame
    pdf.set_draw_color(r=0, g=0, b=0)
    pdf.rect(x=margin, y=margin+(line_height*2), w=(page_width/3)*2, h=line_height*22, style='D')

    # Strengths
    pdf.set_draw_color(r=0, g=0, b=255)
    pdf.rect(x=margin, y=margin+(line_height*24), w=(page_width/3)*2, h=line_height*13, style='D')

    # Stats Frame
    pdf.set_draw_color(r=255, g=0, b=0)
    pdf.rect(x=margin+(page_width/3)*2, y=margin+(line_height*2), w=page_width/3, h=line_height*7, style='D')

    # Questions Frame (29)
    pdf.set_draw_color(r=0, g=255, b=0)
    pdf.rect(x=margin+(page_width/3)*2, y=margin+(line_height*9), w=page_width/3, h=line_height*28, style='D')
    

    ### HEADER ###
    pdf.set_x(margin)
    pdf.set_y(margin)

    # ROW 1 #
    # Sheet title
    pdf.set_font('Arial', 'B', h1)
    pdf.cell(w=page_width/2, h=line_height, txt='Kids on Brooms', border=1, ln=0, align='L')

    # Trope Header
    pdf.set_font('Arial', 'B', h2)
    pdf.cell(w=0, h=line_height, txt='Trope', border=1, ln=1, align='L')

    # ROW 2 #
    # Subtitle
    pdf.set_font('Arial', 'B', h2)
    pdf.cell(w=page_width/2, h=line_height, txt='Harry Potter', border=1, ln=0, align='L')

    # Trope Field
    pdf.set_font('Arial', '', p)
    pdf.cell(w=0, h=line_height, txt=character.get_trope(), border=1, ln=1, align='L')

    
    ### DETAILS SECTION ###
    pdf.set_x(margin)
    pdf.set_y(margin + line_height*2)

    # ROW 1 #
    # Name
    label = 'Name: '
    label_width = pdf.get_string_width(label)
    pdf.set_font('Arial', 'B', p)
    pdf.cell(w=label_width, h=line_height, txt=label, border=1, ln=0, align='L')
    pdf.set_font('Arial', '', p)
    pdf.cell(w=(page_width/3)*2-label_width, h=line_height, txt=character.get_name(), border=1, ln=1, align='L')
    
    # Row 2 #
    # Age
    label = 'Age: '
    label_width = pdf.get_string_width(label)
    pdf.set_font('Arial', 'B', p)
    pdf.cell(w=label_width, h=line_height, txt=label, border=1, ln=0, align='L')
    pdf.set_font('Arial', '', p)
    pdf.cell(w=pdf.get_string_width('9999'), h=line_height, txt=str(character.get_age()), border=1, ln=0, align='L')

    # Grade Cateogry
    label = padding + 'Grade: '
    label_width = pdf.get_string_width(label)
    pdf.set_font('Arial', 'B', p)
    pdf.cell(w=label_width, h=line_height, txt=label, border=1, ln=0, align='L')
    pdf.set_font('Arial', '', p)
    pdf.cell(w=pdf.get_string_width('Upperclassman'), h=line_height, txt=str(character.get_grade_category()), border=1, ln=0, align='L')


    # Pronouns
    label = padding + 'Pronouns: '
    label_width = pdf.get_string_width(label)
    pdf.set_font('Arial', 'B', p)
    pdf.cell(w=label_width, h=line_height, txt=label, border=1, ln=0, align='L')
    pdf.set_font('Arial', '', p)
    pdf.cell(w=pdf.get_string_width('they/them'), h=line_height, txt=str(character.get_pronouns()), border=1, ln=1, align='L')

    # Row 3 #
    # House
    line_length = (page_width / 3) * 2
    label = 'House: '
    label_width = pdf.get_string_width(label)
    pdf.set_font('Arial', 'B', p)
    pdf.cell(w=label_width, h=line_height, txt=label, border=1, ln=0, align='L')
    line_length -= label_width
    pdf.set_font('Arial', '', p)
    pdf.cell(w=pdf.get_string_width('Gryffindor'), h=line_height, txt=str(character.get_house()), border=1, ln=0, align='L')
    line_length -= pdf.get_string_width('Gryffindor')

    # Fear
    label = padding + 'Fear: '
    label_width = pdf.get_string_width(label)
    pdf.set_font('Arial', 'B', p)
    pdf.cell(w=label_width, h=line_height, txt=label, border=1, ln=0, align='L')
    line_length -= label_width
    pdf.set_font('Arial', '', p)
    pdf.cell(w=line_length, h=line_height, txt=str(character.get_fear()), border=1, ln=1, align='L')

    # Row 4 #
    line_length = (page_width/3)*2
    
    # Motivation
    label = 'Motivation: '
    label_width = pdf.get_string_width(label)
    pdf.set_font('Arial', 'B', p)
    pdf.cell(w=label_width, h=line_height, txt=label, border=1, ln=0, align='L')
    line_length -= label_width
    pdf.set_font('Arial', '', p)
    pdf.cell(w=line_length, h=line_height, txt=str(character.get_motivation()), border=1, ln=1, align='L')

    # Row 5 #
    line_length = (page_width/3)*2

    # Description
    label = 'Description: '
    label_width = pdf.get_string_width(label)
    pdf.set_font('Arial', 'B', p)
    pdf.cell(w=label_width, h=line_height, txt=label, border=1, ln=0, align='L')
    line_length -= label_width
    pdf.set_font('Arial', '', p)
    description = character.get_description()
    if pdf.get_string_width(description) > line_length:
        # split on space
        # while <= line length
            # add to string 
        # create cell
        split_desc = description.split(sep=' ')
        i = 0
        curr_str = ''
        while len(curr_str + split_desc[i]) <= line_length:
            curr_str += split_desc[i]
            i += 1
        pdf.cell(w=line_length, h=line_height, txt=curr_str, border=1, ln=1, align='L')
        
        line_length = (page_width/3)*2
        curr_str = ''
        while len(curr_str + split_desc[i]) <= line_length:
            curr_str += split_desc[i]
            i += 1
        pdf.cell(w=line_length, h=line_height, txt=curr_str, border=1, ln=1, align='L')

        line_length = (page_width/3)*2
        curr_str = ''
        while len(curr_str + split_desc[i]) <= line_length:
            curr_str += split_desc[i]
            i += 1
        pdf.cell(w=line_length, h=line_height, txt=curr_str, border=1, ln=1, align='L')
    else:
        pdf.cell(w=line_length, h=line_height, txt=description, border=1, ln=1, align='L')
        for i in range(2):
            pdf.cell(w=line_length, h=line_height, txt='', border=1, ln=1, align='L')


    # pdf = fpdf(unit='cm')
    # pdf.add_page()
    # pdf.set_font('Arial', 'B', h1)

    # count = 1
    # print(pdf.get_y())
    # while(pdf.get_y() <= 100):
    #     print(f'printing cell {count} at y {pdf.get_y()}')
    #     pdf.cell(w=0, h=.75, txt=str(count), border=1, ln=1)
    #     count += 1

    # Output result
    pdf.output('output/charactersheet.pdf', 'F')


if __name__ == "__main__":
    main()