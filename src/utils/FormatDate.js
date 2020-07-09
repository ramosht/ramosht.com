import { format, formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt'

export default class FormatDate {
  formatDate(date) {
    if(!!date) {
      const parsedDate = parseISO(date);
      
      const formattedDate = format(
        new Date(parsedDate),
        "MMMM yyyy",
        {locale: pt}
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
        {locale: pt}
      );
    } else {
      difference = formatDistance(
        parsedStartDate,
        parsedEndDate,
        {locale: pt}
      );
    }

    return difference;
  }
}