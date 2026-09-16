import { createContext, useContext } from 'react';
export const CalendarContext = createContext(null);
export const useCalendarContext = () => {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error('useCalendarContext must be used within a Calendar component');
    }
    return context;
};
//# sourceMappingURL=CalendarContext.js.map