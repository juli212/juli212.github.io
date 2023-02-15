<script>
    import { icons } from '../common/Icons.svelte'
</script>

<div id="about" class="main one">
    <h2>About</h2>
    <p>
        Greetings!
    </p>
    <p>
        Adaptable and passionate full-stack engineer in the NYC area looking for a challenge. Experience lies in developing user-centric products and internal tools
    </p>
<!-- </div>

<div id="skills" class="main two">
    <h2>Skills</h2>	 -->

    <div class='skill-box'>
        <div class='skill'>
            <div class='icon-box'>
                <img {...icons.languages} alt="Languages" />
            </div>
            <h6>Languages</h6>
            <p>Ruby</p>
            <p>Python</p>
            <p>ReactJS</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
        </div>

        <div class='skill'>
            <div class='icon-box'>
                <img {...icons.databases} alt="Databases" />
            </div>
            <h6>Databases</h6>
            <p>MySQL</p>
            <p>PostgreSQL</p>
        </div>

        <div class='skill'>
            <div class='icon-box'>
                <img {...icons.frameworks} alt="Frameworks" />
            </div>
            <h6>Frameworks</h6>
            <p>Rails</p>
            <p>Django</p>
            <p>NextJS</p>
        </div>
    </div>

</div>