window.onload = function() {
    const SUPABASE_URL = 'https://pbxzoxonldbepadxbbqo.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHpveG9ubGRiZXBhZHhiYnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5ODU4ODksImV4cCI6MjAzOTU2MTg4OX0.YaIsf9qYFM6VmfkgGIhvN2ZHyzRrkejaWPYFRvQdaXc';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    document.getElementById('register-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const messageEl = document.getElementById('message');
        
        try {
            const { user, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            });

            if (error) throw error;
            
            messageEl.textContent = 'Registration successful! Please check your email for verification.';
            messageEl.className = 'success';

            // Report conversion to Google Ads
            gtag_report_conversion(this.href);
        } catch (error) {
            messageEl.textContent = 'Error: ' + error.message;
            messageEl.className = 'error';
        }
    });
};