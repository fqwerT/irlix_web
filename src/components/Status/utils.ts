export const StatusConverter = (status:string) => {
         if (status === 'rejected') {
            return 'Отказ'
         }
         if (status === 'pending_approval') {
            return 'На согласовании'
         }
         if (status === 'approved') {
            return 'Согласован'
         }
}