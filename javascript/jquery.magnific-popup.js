$(document).ready(function() {

    $(".proj-1").magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        },

        zoom: {
          enabled: true,
          duration: 300, 
          easing: 'ease-in-out',
          opener: function(openerElement) {
        
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
      }
    });

    $(".proj-2").magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        },

        zoom: {
          enabled: true,
          duration: 300, 
          easing: 'ease-in-out',
          opener: function(openerElement) {
        
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
      }
    });

    $(".proj-3").magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        },

        zoom: {
          enabled: true,
          duration: 300, 
          easing: 'ease-in-out',
          opener: function(openerElement) {
        
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
      }
    });

    $(".proj-4").magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        },

        zoom: {
          enabled: true,
          duration: 300, 
          easing: 'ease-in-out',
          opener: function(openerElement) {
        
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
      }
    });

    $(".proj-5").magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        },

        zoom: {
          enabled: true,
          duration: 300, 
          easing: 'ease-in-out',
          opener: function(openerElement) {
        
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
      }
    });

    
  });