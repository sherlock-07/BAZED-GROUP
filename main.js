// ====================
    // CONFIGURATION
    // ====================
    const defaultConfig = {
      background_color: "#FFFFFF",
      primary_color: "#056838",
      secondary_color: "#010101",
      text_color: "#374151",
      accent_color: "#F3F4F6",
      font_family: "system-ui, -apple-system, sans-serif",
      font_size: 16,
      company_name: "Bazed Group",
      tagline: "Nourishing Communities, Feeding Growth",
      nafaka_name: "Bazed Nafaka",
      feeds_name: "Bazed Animal Feeds",
      nafaka_email: "info@bazednafaka.com",
      feeds_email: "info@bazedfeeds.com",
      phone_number: "+254 700 000 000"
    };

    // ====================
    // STATE MANAGEMENT
    // ====================
    let currentPage = 'home';
    let currentLanguage = 'en';

    // ====================
    // TRANSLATION DATA
    // ====================
    const translations = {
      en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_nafaka: "Bazed Nafaka",
        nav_feeds: "Animal Feeds",
        nav_contact: "Contact",
        hero_tagline: "Nourishing Communities, Feeding Growth",
        featured_products_title: "Featured Products",
        featured_products_subtitle: "Discover our most popular agricultural solutions trusted by farmers and businesses across the region",
        product_maize_title: "Premium Maize",
        product_maize_desc: "High-quality yellow and white maize varieties, carefully sorted and tested",
        product_rice_title: "Basmati Rice",
        product_rice_desc: "Aromatic long-grain rice from premium growing regions",
        product_dairy_title: "Dairy Feeds",
        product_dairy_desc: "Scientifically formulated for maximum milk production",
        product_poultry_title: "Poultry Feeds",
        product_poultry_desc: "Complete nutrition for layers and broilers at every stage",
        learn_more: "Learn more →",
        why_choose_title: "Why Choose Bazed Group?",
        quality_assured: "Quality Assured",
        quality_desc: "Premium products meeting international standards",
        fair_pricing: "Fair Pricing",
        fair_pricing_desc: "Competitive rates for sustainable growth",
        community_focus: "Community Focus",
        community_desc: "Supporting local farmers and businesses",
        get_started: "Get Started Today",
        learn_more_about: "Learn More About Us",
        contact_us: "Get in Touch",
        send_message: "Send Message",
        your_name: "Your Name",
        email_address: "Email Address",
        which_division: "Which Division?",
        select_division: "Select a division",
        nafaka_foods: "Bazed Nafaka (Food Products)",
        animal_feeds: "Bazed Animal Feeds",
        both_divisions: "Both Divisions",
        your_message: "Your Message",
        form_success: "Thank you for your message! Our team will get back to you within 24 hours.",
        feeds_hero_subtitle: "Science-based nutritional feeds designed to maximize livestock health, growth, and productivity"
      },
      sw: {
        nav_home: "Nyumbani",
        nav_about: "Kuhusu Sisi",
        nav_nafaka: "Bazed Nafaka",
        nav_feeds: "Lishe za Wanyama",
        nav_contact: "Wasiliana",
        hero_tagline: "Kulisha Jamii, Kuongeza Ukuaji",
        featured_products_title: "Bidhaa Maarufu",
        featured_products_subtitle: "Gundua suluhisho zetu maarufu za kilimo zinazotegemewa na wakulima na biashara katika eneo hili",
        product_maize_title: "Mahindi Bora",
        product_maize_desc: "Aina za mahindi ya manjano na meupe zenye ubora wa juu, zimepangwa na kupimwa kwa uangalifu",
        product_rice_title: "Mchele wa Basmati",
        product_rice_desc: "Mchele wa urefu mzuri wenye harufu nzuri kutoka maeneo bora ya uzalishaji",
        product_dairy_title: "Lishe za Ng'ombe wa Maziwa",
        product_dairy_desc: "Imeundwa kisayansi kwa uzalishaji wa juu wa maziwa",
        product_poultry_title: "Lishe za Kuku",
        product_poultry_desc: "Lishe kamili kwa kuku wa mayai na nyama katika kila hatua",
        learn_more: "Jifunze zaidi →",
        why_choose_title: "Kwa Nini Uchague Bazed Group?",
        quality_assured: "Ubora Uliothibitishwa",
        quality_desc: "Bidhaa bora zinazokidhi viwango vya kimataifa",
        fair_pricing: "Bei Nzuri",
        fair_pricing_desc: "Bei za ushindani kwa ukuaji endelevu",
        community_focus: "Msisitizo wa Jamii",
        community_desc: "Kusaidia wakulima na biashara za ndani",
        get_started: "Anza Leo",
        learn_more_about: "Jifunze Zaidi Kuhusu Sisi",
        contact_us: "Wasiliana Nasi",
        send_message: "Tuma Ujumbe",
        your_name: "Jina Lako",
        email_address: "Anwani ya Barua Pepe",
        which_division: "Idara Gani?",
        select_division: "Chagua idara",
        nafaka_foods: "Bazed Nafaka (Bidhaa za Chakula)",
        animal_feeds: "Lishe za Wanyama za Bazed",
        both_divisions: "Idara Zote Mbili",
        your_message: "Ujumbe Wako",
        form_success: "Asante kwa ujumbe wako! Timu yetu itawasiliana nawe ndani ya masaa 24.",
        feeds_hero_subtitle: "Lishe za kisayansi zilizoundwa kuongeza afya, ukuaji na tija ya mifugo"
      }
    };

    // ====================
    // NAVIGATION SYSTEM
    // ====================
    /**
     * HOW PAGE NAVIGATION WORKS:
     * 
     * 1. All 5 pages (Home, About, Nafaka, Feeds, Contact) exist in the HTML
     *    at the same time but only ONE is visible at a time.
     * 
     * 2. Each page has class "page" and the visible one also has class "active"
     * 
     * 3. CSS rules control visibility:
     *    .page { display: none; }           ← Hides all pages
     *    .page.active { display: block; }   ← Shows only active page
     * 
     * 4. When you click a navigation link, JavaScript:
     *    - Removes "active" class from current page (hides it)
     *    - Adds "active" class to requested page (shows it)
     *    - Updates navigation highlighting
     *    - Scrolls to top
     * 
     * 5. This is called a "Single Page Application" (SPA) because:
     *    - No page reloads happen
     *    - No separate HTML files are loaded
     *    - Everything happens instantly through JavaScript
     */
    
    function showPage(pageName) {
      // Remove active class from all pages (hides them)
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      
      // Add active class to requested page (shows it)
      const pageElement = document.getElementById(`${pageName}-page`);
      if (pageElement) {
        pageElement.classList.add('active');
        currentPage = pageName;
        
        // Update navigation highlighting
        updateActiveNavLinks(pageName);
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // Close mobile menu if open
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
      }
    }

    function updateActiveNavLinks(pageName) {
      // Remove active class from all nav links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      
      // Add active class to current page nav links
      document.querySelectorAll(`[data-page="${pageName}"]`).forEach(link => {
        if (link.classList.contains('nav-link') || link.closest('.mobile-menu')) {
          link.classList.add('active');
        }
      });
    }

    // ====================
    // EVENT LISTENERS
    // ====================
    // Listen for clicks on elements with data-page attribute
    document.addEventListener('click', (e) => {
      const pageLink = e.target.closest('[data-page]');
      if (pageLink) {
        e.preventDefault();
        const pageName = pageLink.getAttribute('data-page');
        showPage(pageName);
      }
    });

    // Mobile menu toggle
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('active');
    });

    // ====================
    // FORM HANDLING
    // ====================
    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formMessage = document.getElementById('form-message');
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const location = document.getElementById('location').value.trim();
      const division = document.getElementById('division').value;
      const userType = document.getElementById('user-type').value;
      const message = document.getElementById('message').value.trim();
      
      // Validate required fields
      if (!name || !email || !phone || !location || !division || !userType || !message) {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.className = 'mt-4 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200';
        formMessage.classList.remove('hidden');
        return;
      }
      
      // Validate phone format
      const phoneRegex = /^[0-9+\-\s\(\)]+$/;
      if (!phoneRegex.test(phone) || phone.length < 10) {
        formMessage.textContent = 'Please enter a valid phone number.';
        formMessage.className = 'mt-4 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200';
        formMessage.classList.remove('hidden');
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'mt-4 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200';
        formMessage.classList.remove('hidden');
        return;
      }
      
      // If all validations pass
      formMessage.textContent = 'Thank you! Your message has been sent successfully.';
      formMessage.className = 'mt-4 p-4 rounded-lg bg-green-50 text-green-700 border border-green-200';
      formMessage.classList.remove('hidden');
      
      e.target.reset();
      
      setTimeout(() => {
        formMessage.classList.add('hidden');
      }, 5000);
    });

    // ====================
    // PRODUCT PAGE NAVIGATION
    // ====================
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('back-to-nafaka')) {
        e.preventDefault();
        showPage('nafaka');
      }
      // Back to Animal Feeds from feed solution product pages
      if (e.target.classList.contains('back-to-feeds')) {
        e.preventDefault();
        showPage('feeds');
      }
    });

    // Feed Solution Cards Navigation
    // Poultry Feeds
    const poultryFeedsCard = document.querySelector('[data-page="poultry-feeds-products"]');
    if (poultryFeedsCard) {
      poultryFeedsCard.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('poultry-feeds-products');
      });
    }
    // Dairy Feeds
    const dairyFeedsCard = document.querySelector('[data-page="dairy-feeds-products"]');
    if (dairyFeedsCard) {
      dairyFeedsCard.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('dairy-feeds-products');
      });
    }
    // Raw Materials
    const rawMaterialsCard = document.querySelector('[data-page="raw-materials-products"]');
    if (rawMaterialsCard) {
      rawMaterialsCard.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('raw-materials-products');
      });
    }
    // Additives & Supplements
    const additivesCard = document.querySelector('[data-page="additives-products"]');
    if (additivesCard) {
      additivesCard.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('additives-products');
      });
    }

    // ====================
    // TRANSLATION SYSTEM
    // ====================
    function translatePage() {
      const lang = currentLanguage;
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
          element.textContent = translations[lang][key];
        }
      });
    }

    // ====================
    // CANVA ELEMENTS SDK
    // ====================
    async function onConfigChange(config) {
      const customFont = config.font_family || defaultConfig.font_family;
      const baseFontStack = 'system-ui, -apple-system, sans-serif';
      const baseSize = config.font_size || defaultConfig.font_size;
      
      const backgroundColor = config.background_color || defaultConfig.background_color;
      const primaryColor = config.primary_color || defaultConfig.primary_color;
      const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
      const textColor = config.text_color || defaultConfig.text_color;
      const accentColor = config.accent_color || defaultConfig.accent_color;

      // Apply font and background
      document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
      document.body.style.fontSize = `${baseSize}px`;
      document.body.style.backgroundColor = backgroundColor;

      // Update text content
      const companyName = config.company_name || defaultConfig.company_name;
      const tagline = config.tagline || defaultConfig.tagline;
      const nafakaName = config.nafaka_name || defaultConfig.nafaka_name;
      const feedsName = config.feeds_name || defaultConfig.feeds_name;
      
      document.querySelectorAll('#nav-company-name, #hero-company-name, #footer-company-name').forEach(el => {
        el.textContent = companyName;
      });
      
      document.querySelectorAll('#hero-tagline, #footer-tagline').forEach(el => {
        el.textContent = tagline;
      });
      
      document.querySelectorAll('#division1-name, #nafaka-title, #contact-nafaka-name').forEach(el => {
        el.textContent = nafakaName;
      });
      
      document.querySelectorAll('#division2-name, #feeds-title, #contact-feeds-name').forEach(el => {
        el.textContent = feedsName;
      });

      // Update contact information
      const nafakaEmail = config.nafaka_email || defaultConfig.nafaka_email;
      const feedsEmail = config.feeds_email || defaultConfig.feeds_email;
      const phoneNumber = config.phone_number || defaultConfig.phone_number;
      
      const nafakaEmailEl = document.getElementById('contact-nafaka-email');
      if (nafakaEmailEl) {
        nafakaEmailEl.textContent = nafakaEmail;
        nafakaEmailEl.href = `mailto:${nafakaEmail}`;
      }
      
      const feedsEmailEl = document.getElementById('contact-feeds-email');
      if (feedsEmailEl) {
        feedsEmailEl.textContent = feedsEmail;
        feedsEmailEl.href = `mailto:${feedsEmail}`;
      }
      
      document.querySelectorAll('#contact-nafaka-phone, #contact-feeds-phone').forEach(el => {
        el.textContent = phoneNumber;
        el.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
      });

      // Apply colors
      document.querySelectorAll('.bg-green-700, .text-green-700, .border-green-700').forEach(el => {
        if (el.classList.contains('bg-green-700')) {
          el.style.backgroundColor = primaryColor;
        }
        if (el.classList.contains('text-green-700')) {
          el.style.color = primaryColor;
        }
        if (el.classList.contains('border-green-700')) {
          el.style.borderColor = primaryColor;
        }
      });
      
      document.querySelectorAll('.hover\\:bg-green-800').forEach(el => {
        el.addEventListener('mouseenter', () => {
          el.style.backgroundColor = primaryColor;
          el.style.filter = 'brightness(0.9)';
        });
        el.addEventListener('mouseleave', () => {
          el.style.backgroundColor = primaryColor;
          el.style.filter = 'brightness(1)';
        });
      });

      document.querySelectorAll('.bg-gray-900, .text-gray-900').forEach(el => {
        if (el.classList.contains('bg-gray-900')) {
          el.style.backgroundColor = secondaryColor;
        }
        if (el.classList.contains('text-gray-900')) {
          el.style.color = secondaryColor;
        }
      });

      document.querySelectorAll('.text-gray-700, .text-gray-600').forEach(el => {
        el.style.color = textColor;
      });

      document.querySelectorAll('.bg-green-50, .bg-gray-50').forEach(el => {
        el.style.backgroundColor = accentColor;
      });
    }

    // Initialize Element SDK
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.accent_color || defaultConfig.accent_color,
              set: (value) => {
                config.accent_color = value;
                window.elementSdk.setConfig({ accent_color: value });
              }
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                config.text_color = value;
                window.elementSdk.setConfig({ text_color: value });
              }
            },
            {
              get: () => config.primary_color || defaultConfig.primary_color,
              set: (value) => {
                config.primary_color = value;
                window.elementSdk.setConfig({ primary_color: value });
              }
            },
            {
              get: () => config.secondary_color || defaultConfig.secondary_color,
              set: (value) => {
                config.secondary_color = value;
                window.elementSdk.setConfig({ secondary_color: value });
              }
            }
          ],
          borderables: [],
          fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
              config.font_family = value;
              window.elementSdk.setConfig({ font_family: value });
            }
          },
          fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
              config.font_size = value;
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }),
        mapToEditPanelValues: (config) => new Map([
          ["company_name", config.company_name || defaultConfig.company_name],
          ["tagline", config.tagline || defaultConfig.tagline],
          ["nafaka_name", config.nafaka_name || defaultConfig.nafaka_name],
          ["feeds_name", config.feeds_name || defaultConfig.feeds_name],
          ["nafaka_email", config.nafaka_email || defaultConfig.nafaka_email],
          ["feeds_email", config.feeds_email || defaultConfig.feeds_email],
          ["phone_number", config.phone_number || defaultConfig.phone_number]
        ])
      });
    }
