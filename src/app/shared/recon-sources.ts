import { ReconModel } from './recon-model';

export const reconList: ReconModel[] = [
    {
      name: 'NS(Name Server) LookUp',
      endpoint: 'https://api.hackertarget.com/dnslookup/?q=',
      icon: 'NA'
    },
    {
      name: 'Port Scan',
      endpoint: 'https://api.hackertarget.com/nmap/?q=',
      icon: ''
    },
    {
      name: 'Reverse Ip Lookup',
      endpoint: 'https://api.hackertarget.com/reverseiplookup/?q=',
      icon: ''
    },
    {
      name: 'WhoIs',
      endpoint: 'https://api.hackertarget.com/whois/?q=',
      icon: ''
    },
    {
      name: 'Censys',
      endpoint: 'https://censys.io/ipv4/%s/raw',
      icon: ''
    },
    {
      name: 'HTTP Header',
      endpoint: 'https://api.hackertarget.com/httpheaders/?q=',
      icon: ''
    },
    {
      name: 'Trace Route',
      endpoint: 'https://api.hackertarget.com/mtr/?q=',
      icon: ''
    },
    {
      name: 'Reverse DNS',
      endpoint: 'https://api.hackertarget.com/reversedns/?q=',
      icon: ''
    },
    {
      name: 'Geo IP Address',
      endpoint: 'https://api.hackertarget.com/geoip/?q=',
      icon: ''
    },
    {
      name: 'Shared DNS',
      endpoint: 'https://api.hackertarget.com/findshareddns/?q=',
      icon: ''
    },
    {
      name: 'Page Links',
      endpoint: 'https://api.hackertarget.com/pagelinks/?q=',
      icon: ''
    },
    {
      name: 'Ping Host',
      endpoint: 'https://api.hackertarget.com/nping/?q=',
      icon: ''
    },
    {
      name: 'Host Search',
      endpoint: 'https://api.hackertarget.com/hostsearch/?q=',
      icon: ''
    },
    {
      name: 'Zone Transfer',
      endpoint: 'https://api.hackertarget.com/zonetransfer/?q=',
      icon: ''
    },
    {
      name: 'Subnet Look Up',
      endpoint: 'https://api.hackertarget.com/subnetcalc/?q=',
      icon: ''
    }
  ];
