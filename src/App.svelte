<script>
  import Project from './components/Project.svelte';
  import Header from './components/Header.svelte'
  import About from './components/About.svelte'
  import Footer from './components/Footer.svelte';
  import Contact from './components/Contact.svelte';
</script>

<Header />
<div class='outer'>
  <div id="contain" class="container">
    <About />
    <Project />
    <Contact />
    <Footer />
  </div>
</div>  
