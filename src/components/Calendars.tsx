import React from 'react';
import {Calendar} from 'react-native-calendars';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {getThemeColors} from "../constants/colors";

const Calendars = () => {
    const isDarkTheme = useSelector((state: RootState) => state.theme.value);
    const colors = getThemeColors(isDarkTheme);

    return (
        <>
            <Calendar
                key={isDarkTheme ? 'isDarkTheme' : ''}
                theme={{
                    backgroundColor: colors.backgroundColor,
                    calendarBackground: colors.backgroundColor,
                    textSectionTitleColor: colors.textSectionTitleColor,
                    textSectionTitleDisabledColor: colors.textDisabledColor,
                    selectedDayBackgroundColor: colors.selectedDayBackgroundColor,
                    selectedDayTextColor: colors.selectedDayTextColor,
                    todayTextColor: colors.todayTextColor,
                    dayTextColor: colors.dayTextColor,
                    textDisabledColor: colors.textDisabledColor,
                    dotColor: colors.dotColor,
                    selectedDotColor: colors.selectedDotColor,
                    arrowColor: colors.arrowColor,
                    disabledArrowColor: colors.disabledArrowColor,
                    monthTextColor: colors.monthTextColor,
                    indicatorColor: colors.indicatorColor,
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16
                }}
            />
        </>
    );
};

export default Calendars;