export function requestNotificationPermission() {
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
}

export function displayNotification(title, message) {
    if (Notification.permission == 'granted' && title) {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        const options = {
            body: message,
            icon: 'android-chrome-192x192.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            }
          };
        reg.showNotification(title, options);
      });
    }
}