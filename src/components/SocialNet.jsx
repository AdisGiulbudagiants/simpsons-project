import { SiGithub, SiTelegram, SiVk, SiGmail, SiLinkedin } from 'react-icons/si'

const SocialNet = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-[2rem] mb-1 drop-shadow-lg font-bold font-poppins  text-yellow">
        Contact Me:
      </p>
      <div className=" 320px-639px:grid 320px-639px:grid-cols-2 flex justify-center">
        <span className="sm:mr-3 flex flex-col justify-center items-center">
          <a href="https://github.com/AdisGiulbudagiants" target="_blank" rel="noopener noreferrer">
            <SiGithub
              className="transition easy-in-out duration-[0.35s] hover:fill-white hover:-translate-y-1 hover:scale-110"
              size="50"
            />
          </a>
          <label>Github</label>
        </span>
        <span className="sm:mr-3 flex flex-col justify-center items-center">
          <a href="https://t.me/AbuDabiSida" target="_blank" rel="noopener noreferrer">
            <SiTelegram
              className="transition easy-in-out duration-[0.35s] hover:fill-white hover:-translate-y-1 hover:scale-110"
              size="50"
            />
          </a>
          <label>Telegram</label>
        </span>
        <span className="sm:mr-3 flex flex-col justify-center items-center">
          <a href="https://vk.com/id383399628" target="_blank" rel="noopener noreferrer">
            <SiVk
              className="transition easy-in-out duration-[0.35s] hover:fill-white hover:-translate-y-1 hover:scale-110"
              size="50"
            />
          </a>
          <label>Vk</label>
        </span>
        <span className="sm:mr-3 flex flex-col justify-center items-center">
          <a href="https://www.linkedin.com/in/adisdev/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin
              className="transition easy-in-out duration-[0.35s] hover:fill-white hover:-translate-y-1 hover:scale-110"
              size="50"
            />
          </a>
          <label>LinkedIn</label>
        </span>
        <span className="flex flex-col justify-center items-center">
          <a href="mailto:adisforwork2001@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail
              className="transition easy-in-out duration-[0.35s] hover:fill-white hover:-translate-y-1 hover:scale-110"
              size="50"
            />
          </a>
          <label>GMail</label>
        </span>
      </div>
    </div>
  )
}

export default SocialNet
