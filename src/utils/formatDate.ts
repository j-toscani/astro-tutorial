
const formatter = Intl.DateTimeFormat('en', { dateStyle: 'long'})

export default function formatDate(stringDate: string) {
    const date = new Date(stringDate);
    return formatter.format(date)
}