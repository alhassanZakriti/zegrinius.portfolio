// Alternative simple contact methods

// Option 1: Simple mailto fallback
export const sendEmailViaMailto = (formData: {name: string, email: string, message: string}) => {
  const subject = `Portfolio Contact: ${formData.name}`
  const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
  const mailtoUrl = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${body}`
  window.open(mailtoUrl)
}

// Option 2: Formspree (replace YOUR_FORM_ID)
export const sendViaFormspree = async (formData: {name: string, email: string, message: string}) => {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  return response.ok
}

// Option 3: Web3Forms (free alternative)
export const sendViaWeb3Forms = async (formData: {name: string, email: string, message: string}) => {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      access_key: 'YOUR_ACCESS_KEY', // Get from web3forms.com
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }),
  })
  return response.ok
}
