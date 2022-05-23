import { format, formatDistance, parseISO } from 'date-fns';
import enGB from 'date-fns/locale/en-GB'

export default class FormatDate {
  formatDate(date) {
    if(!!date) {
      const parsedDate = parseISO(date);
      
      const formattedDate = format(
        new Date(parsedDate),
        "MMMM yyyy",
        {locale: enGB}
      );

      const capitalizedFormattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  
      return capitalizedFormattedDate;
    } else {
      return '';
    }
    
  }

  differenceInWords(startDate, endDate, is_current) {
    const parsedStartDate = parseISO(startDate);
    const parsedEndDate = parseISO(endDate);
    let difference = '';

    if(is_current) {
      difference = formatDistance(
        parsedStartDate,
        new Date(),
        {locale: enGB}
      );
    } else {
      difference = formatDistance(
        parsedStartDate,
        parsedEndDate,
        {locale: enGB}
      );
    }

    return difference;
  }
}