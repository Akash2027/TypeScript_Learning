export function calculateAttendancePercentage(
    present: number,
    total: number
): number {
    if (total === 0) {
        return 0;
    }

    return (present / total) * 100;
}