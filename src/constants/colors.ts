export const getThemeColors = (isDarkTheme: boolean) => {
    return {
        //static style
        homeBG: isDarkTheme ? 'rgba(18,18,18,0.91)' : '#fcfcfc',
        heading: isDarkTheme ? '#ffffff' : '#8f909c',
        textBtn: isDarkTheme ? '#000000' : '#ffffff',
        app_color_primary: isDarkTheme ? '#ffffff' : '#4f536c',
        cardBG: isDarkTheme ? '#000000' : 'rgba(245, 126, 122, 0.25)',
        //calendar style
        backgroundColor: isDarkTheme ? 'rgba(18,18,18,0.91)' : '#fcfcfc',
        textSectionTitleColor: isDarkTheme ? '#ffffff' : '#8f909c',
        selectedDayBackgroundColor: isDarkTheme ? '#ffffff' : '#4f536c',
        selectedDayTextColor: isDarkTheme ? '#000000' : '#ffffff',
        todayTextColor: isDarkTheme ? '#ffffff' : '#4f536c',
        dayTextColor: isDarkTheme ? '#ffffff' : '#8f909c',
        textDisabledColor: isDarkTheme ? '#000000' : '#ffffff',
        dotColor: isDarkTheme ? '#ffffff' : '#4f536c',
        selectedDotColor: isDarkTheme ? '#000000' : '#ffffff',
        arrowColor: isDarkTheme ? '#ffffff' : '#4f536c',
        disabledArrowColor: isDarkTheme ? '#000000' : '#ffffff',
        monthTextColor: isDarkTheme ? '#ffffff' : '#4f536c',
        indicatorColor: isDarkTheme ? '#ffffff' : '#4f536c',
    }
}
