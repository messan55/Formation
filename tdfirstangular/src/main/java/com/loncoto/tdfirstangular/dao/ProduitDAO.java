package com.loncoto.tdfirstangular.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.omg.PortableInterceptor.SUCCESSFUL;
import org.springframework.transaction.annotation.Transactional;

import com.loncoto.tdfirstangular.metier.Produit;

public class ProduitDAO implements IProduitDAO{

	@PersistenceContext
	private EntityManager em;	
	public EntityManager getEm() {return em;}
	public void setEm(EntityManager em) {this.em = em;}

	@Transactional
	@Override
	public List<Produit> findAll() {
		return em.createQuery("from Produit", Produit.class).getResultList();
	}

	@Transactional
	@Override
	public Produit findById(int id) {
		return em.find(Produit.class, id);
	}

	@Transactional
	@Override
	public Produit save(Produit p) {
		Produit existing = em.find(Produit.class, p.getId());
		if (existing == null) {
			em.persist(p);
		}
		else{
			p = em.merge(p);
		}
		return p;
	}
	
	@Override
	public Produit delete(int p) {
		Produit pr = new Produit();
		pr = em.find(Produit.class, pr.getId());
		em.remove(pr);
		return pr;
		
	}
	

}
