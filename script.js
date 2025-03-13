document.addEventListener('DOMContentLoaded', function() {
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    acceptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const name = row.querySelector('td:first-child').textContent;
            alert(name + ' has been accepted.');
            // Remove the row from the table
            row.remove();
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const name = row.querySelector('td:first-child').textContent;
            alert(name + ' has been deleted.');
            // Remove the row from the table
            row.remove();
        });
    });
});
