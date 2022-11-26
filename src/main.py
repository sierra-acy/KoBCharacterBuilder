import json
import PySimpleGUI as sg

def main():
    """main runner"""

    layout = define_layout()

    sg.theme('Dark Blue 3')  # please make your windows colorful
    window = sg.Window('Character Builder', layout)

    while True:  # Event Loop
        event, values = window.read()
        print('EVENT AND VALUES: ')
        print(event, values)
        if event == sg.WIN_CLOSED or event == 'Exit':
            break
        handle_event(event, values, window)

    window.close()

def define_layout():
    """ defines and returns the layout """

    # mock dynamic table for statblock 
    stats = [['Fight', 'Flight'], ['Brains', 'Brawn'], ['Charm', 'Grit']]
    stats_frame_layout = []

    for pair in stats:
        # Text header
        stats_frame_layout.append([sg.Text(pair[0], auto_size_text=False, border_width=1), sg.Text(pair[1], auto_size_text=False, border_width=1)])
        # Input
        stats_frame_layout.append([sg.Input('', disabled=True, border_width=1, k=pair[0].upper()), sg.Input('', disabled=True, border_width=1, k=pair[1].upper())])

    # Details layout
    years = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', '6th Year', '7th Year', 'Other', 'N/A']
    houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin', 'N/A']
    brooms = ['The Blocker\'s Broom', 'Bolting 4000', 'The Bruiser']
    details_frame_layout = [
        [   sg.Text('Name', auto_size_text=False, size=8), sg.InputText(enable_events=True, k='NAME')
        ],
        [ 
            sg.Text('Pronouns', auto_size_text=False, size=8), sg.InputText(enable_events=True, k='PRONOUNS', size=10)
        ],
        [   sg.Text('Age', auto_size_text=False, size=8), sg.InputText(enable_events=True, k='AGE', size=5)
        ],
        [
            sg.Text('Grade', auto_size_text=False, size=8), sg.Combo(values=years, auto_size_text=False, enable_events=True, k='GRADE', size=10), 
            sg.Text('Grade Category', auto_size_text=False, size=11), sg.InputText(size=10, k='GRADECATEGORY')
        ],
        [
            sg.Text('House', auto_size_text=False, size=8), sg.Combo(values=houses, auto_size_text=False, enable_events=True, size=10, k='HOUSE')
        ],
        [   sg.Text('Fear', auto_size_text=False, size=8), sg.Multiline(auto_size_text=False, enable_events=True, k='FEAR')
        ],
        [   sg.Text('Motivation', auto_size_text=False, size=8), sg.Multiline(auto_size_text=False, enable_events=True, k='MOTIVATION')
        ],
        [   sg.Text('Description', auto_size_text=False, size=8), sg.Multiline(auto_size_text=False, enable_events=True, k='DESCRIPTION')
        ],
        [   sg.Text('Your Broom', auto_size_text=False, size=8), sg.Combo(values=brooms, auto_size_text=False, enable_events=True, k='BROOM', size=10)]
        ,
        [   sg.Text('Name', auto_size_text=False, size=8, visible=False), sg.InputText(k='BROOMNAME', visible=False, size=10)
        ],
        [   sg.Text('Look', auto_size_text=False, size=8, visible=False), sg.Multiline(enable_events=True, k='BROOMLOOK', visible=False)
        ],
        [   sg.Text('Mechanical Benefit', auto_size_text=False, size=8, visible=False), sg.Multiline(k='BROOMMECHANICS', visible=False)
        ],
        [
            sg.Text('Your Wand', auto_size_text=False, size=8)
        ],
        [
            sg.Text('Wood', auto_size_text=False, size=8), sg.InputText(k='WANDWOOD', size=10), sg.Text('Core', auto_size_text=False, size=5), sg.InputText(k='WANDCORE', size=10), 
        ],
        [
            sg.Text('Familiar', auto_size_text=False, size=8), sg.InputText(k='FAMILIAR', size=10)
        ],
        [
            sg.Text('School Bag', auto_size_text=False, size=8), sg.Multiline(k='SCHOOLBAG')
        ]
    ]

    layout = [
        [sg.Text('Trope'), sg.Combo(values=['Aloof Teacher', 'Bullheaded Muscle'], enable_events=True, k='TROPE')],
        [sg.Frame('Stats', layout=stats_frame_layout, k='STATBLOCK')],
        [sg.Frame('Details', layout=details_frame_layout, k='DETAILSBLOCK')]
    ]

    return layout

def handle_event(event, values, window):
    """ manages all events """

    if event == 'TROPE':
        # if json contains values[trope]
            # for each 
                # window update key with value
            
        if values['TROPE'] == 'Aloof Teacher':
            window['FIGHT'].update('d4')
            window['FLIGHT'].update('d20')
            window['BRAINS'].update('d12')
            window['BRAWN'].update('d6')
            window['CHARM'].update('d8')
            window['GRIT'].update('d10')
        if values['TROPE'] == 'Bullheaded Muscle':
            window['FIGHT'].update('d4')
            window['FLIGHT'].update('d20')
            window['BRAINS'].update('d12')
            window['BRAWN'].update('d6')
            window['CHARM'].update('d8')
            window['GRIT'].update('d10')


   # trope dropdown
        # on choose
            # show stats
            # save stats to char
            # show age
            # save age to char
            # show strengths
            # save strengths
            # show flaws
            # save flaws
            # Show Q1
            # save Q1
            # show Q2
            # save Q2

if __name__ == "__main__":
    main()