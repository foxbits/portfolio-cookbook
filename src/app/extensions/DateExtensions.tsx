import { formatDistance } from 'date-fns';

export interface DateBasedObject {
    startDate: Date;
    endDate?: Date;
    duration?: string;
    displayString?: string;
}

// Helper to calculate duration string using date-fns
export function getDurationString(startDate: Date, endDate?: Date): string {
    const end = endDate ?? new Date();
    return formatDistance(end, startDate);
}

export function getDisplayString(startDate: Date, endDate?: Date, duration?: string): string {
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).replace(' ', '. ');
    };

    const startStr = formatDate(startDate);
    const endStr = endDate ? formatDate(endDate) : 'Present';
    if (startStr === endStr) {
        return `${startStr} (${duration})`;
    }

    return `${startStr} - ${endStr} (${duration})`;
}

// Map jobs to experiences with calculated duration
export function toDisplayableDates<T extends DateBasedObject>(items: T[]): T[] {
    return items.map(item => {
        const durationString = item.duration || getDurationString(item.startDate, item.endDate);
        const displayString = item.displayString || getDisplayString(item.startDate, item.endDate, durationString);

        return {
            ...item,
            duration: durationString,
            displayString: displayString
        };
    });
}


export function getAge(year: number, month: number, day: number) {
    const today = new Date();
    const birthDay = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDay.getFullYear();
    const m = today.getMonth() - birthDay.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate()))
        age--;
    return age;
}
